import { User } from './user'

export interface ApiResponse {
    page: number;
    total: number;
    total_pages: number;
    data: User[];
}