import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { User } from "../types/user";
import { ApiResponse } from "../types/apiResponse";
import { Appbar } from "../Components/Appbar";
import { Avatar } from "../Components/Avatar";

export default function Signup() {
    const navigate = useNavigate();
    const [users, setUsers] = useState<User[]>([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [editingUser, setEditingUser] = useState<User | null>(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

    // data fetching
    useEffect(() => {
        if (localStorage.getItem("token")) {
            const fetchUsers = async () => {
                try {
                    const response = await axios.get<ApiResponse>(
                        `${import.meta.env.VITE_BACKEND_URL}/api/users?page=${page}`,
                        {
                            headers: {
                                Authorization: localStorage.getItem("token") || "",
                                "Content-Type": "application/json",
                            },
                        }
                    );
                    setUsers(response.data.data);
                    setTotalPages(response.data.total_pages);
                    navigate(`?page=${page}`);
                } catch (error) {
                    console.error("Error fetching users:", error);
                    alert("Failed to fetch users");
                }
            };
            fetchUsers();
        } else {
            navigate(`/login`);
        }
    }, [page, navigate]);

    // filtering users based on search term
    useEffect(() => {
        const filtered = users.filter(user => 
            `${user.first_name} ${user.last_name}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredUsers(filtered);
    }, [users, searchTerm]);

    const handlePrevious = () => {
        if (page > 1) setPage(page - 1);
    };

    const handleNext = () => {
        if (page < totalPages) setPage(page + 1);
    };

    const handleEdit = (user: User) => {
        setEditingUser(user);
    };

    // Updating data after editing user detail with validation
    const handleSave = async () => {
        if (!editingUser) return;

        if (!editingUser.first_name.trim() || !editingUser.last_name.trim() || !editingUser.email.trim()) {
            alert("All fields must be filled before saving.");
            return;
        }

        try {
            const response = await axios.put(
                `${import.meta.env.VITE_BACKEND_URL}/api/users/${editingUser.id}`,
                {
                    first_name: editingUser.first_name.trim(),
                    last_name: editingUser.last_name.trim(),
                    email: editingUser.email.trim()
                },
                {
                    headers: {
                        Authorization: localStorage.getItem("token") || "",
                        "Content-Type": "application/json",
                    },
                }
            );
            setUsers(users.map(user => 
                user.id === editingUser.id ? { ...user, ...response.data } : user
            ));
            setEditingUser(null);
        } catch (error) {
            console.error("Error updating user:", error);   //error handling
            alert("Failed to update user");
        }
    };

    // Deleting user
    const handleDelete = async (userId: number) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (!confirmDelete) return;

        try {
            await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/api/users/${userId}`, {
                headers: {
                    Authorization: localStorage.getItem("token") || "",
                    "Content-Type": "application/json",
                },
            });
            setUsers(users.filter((user) => user.id !== userId));
        } catch (error) {
            console.error("Error deleting user:", error);
            alert("Failed to delete user");
        }
    };

    return ( <>
        <Appbar/>
        <div className="font-sans text-center flex flex-col min-h-screen pb-12 pt-4 pl-4 pr-4">
            <h1 className="text-3xl font-bold mb-6">Hello ReqRes users!</h1>

            <div className="mb-6">  {/* search-bar */}
                <input
                    type="text"
                    placeholder="Search by name or email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border pl-2 pt-1 pb-1 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* user display after filter/search */}
            <div className="flex-1 flex flex-col justify-between">
                {filteredUsers.length > 0 ? (
                    <div className="flex flex-wrap justify-center gap-6">
                        {filteredUsers.map((user) => (
                            <div
                                key={user.id}
                                className="w-72 p-3 text-center border border-gray-200 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200"
                            >
                                <Avatar src={user.avatar} />
                                {editingUser?.id === user.id ? (
                                    <>
                                        <input
                                            type="text"
                                            value={editingUser.first_name}
                                            placeholder="First Name"
                                            onChange={(e) =>
                                                setEditingUser({ ...editingUser, first_name: e.target.value })
                                            }
                                            className="border p-1 mb-2 w-full"
                                        />
                                        <input
                                            type="text"
                                            value={editingUser.last_name}
                                            placeholder="Last Name"
                                            onChange={(e) =>
                                                setEditingUser({ ...editingUser, last_name: e.target.value })
                                            }
                                            className="border p-1 mb-2 w-full"
                                        />
                                        <input
                                            type="text"
                                            value={editingUser.email}
                                            placeholder="Email"
                                            onChange={(e) =>
                                                setEditingUser({ ...editingUser, email: e.target.value })
                                            }
                                            className="border p-1 mb-2 w-full"
                                        />
                                        <button
                                            onClick={handleSave}
                                            className="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                                        >
                                            Save
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <p className="font-semibold text-lg">{user.first_name} {user.last_name}</p>
                                        <p className="text-gray-600 text-sm">{user.email}</p>
                                        <div className="mt-4 flex justify-center space-x-2">
                                            <button
                                                onClick={() => handleEdit(user)}
                                                className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(user.id)}
                                                className="text-white bg-red-700 hover:bg-red-800 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-gray-500">No user found</p>
                )}

                {/* pagination */}
                <div className="flex justify-center items-center mt-8 space-x-4 pb-6">
                    <button
                        onClick={handlePrevious}
                        disabled={page === 1}
                        className={`px-4 py-2 rounded-full ${page === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"}`}
                    >
                        ←
                    </button>
                    <span className="text-lg font-medium">
                        Page {page} of {totalPages || "Loading..."}
                    </span>
                    <button
                        onClick={handleNext}
                        disabled={page === totalPages || totalPages === 0}
                        className={`px-4 py-2 rounded-full ${page === totalPages || totalPages === 0 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-500 hover:bg-blue-600 text-white"}`}
                    >
                        →
                    </button>
                </div>
            </div>
        </div>
    </>
    );
}