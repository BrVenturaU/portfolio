export interface Project {
    id: number,
    name: string,
    responsabilities: string[]
}

export interface Job {
    id: number,
    description: string;
    responsabilities?: string[];
    technologies?: string[];
    projects?: Project[];
}