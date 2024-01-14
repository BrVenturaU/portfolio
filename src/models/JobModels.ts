export interface Position {
    id: number;
    title: string;
    entity: {
        name: string;
        image: {
            url: string;
            alt: string;
        }
    };
    achievedOn: [number, number]
    job: Job;
}

export interface Job {
    id: number,
    description: string;
    responsabilities?: string[];
    technologies?: string[];
    projects?: Project[];
}

export interface Project {
    id: number,
    name: string,
    responsabilities: string[]
}