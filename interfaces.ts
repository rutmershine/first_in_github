// hello world of git!!!
// i changed something:)
export interface IWorker {
    id: number;
    name: string;
    address: string;
    salary: number;
    work(currentWork: string): void;
}

export interface Client {
    id: number;
    name: string;
    address: string;
    responsibleEmployeeId: number;
    client(feedback: string): void;
}