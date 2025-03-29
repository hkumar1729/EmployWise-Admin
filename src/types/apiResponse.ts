import { User } from './user'

// api response interface
export interface ApiResponse {
    page: number;
    total: number;
    total_pages: number;
    data: User[];
}