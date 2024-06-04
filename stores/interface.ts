export interface ListenerSubscription {
    remove: () => void;
}

export interface SearchPayload {
    query?: string,
    page?: number
}

export interface IResponse {
    status: boolean;
    success: boolean;
    status_code: number;
    response?: string;
    message: string;
}

export interface PaginatedResponse extends IResponse {
    data: {
        data: any[];
        next?: number;
        total?: number
    }
}