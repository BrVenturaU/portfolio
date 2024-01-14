import { z, defineCollection, reference } from "astro:content";

const educationCollection = defineCollection({
    type: 'data',
    schema: z.object({
        id: z.number(),
        title: z.string(),
        entityName: z.string(),
        description: z.string(),
        achievedOn: z.tuple([z.number(), z.number()])
    })
})

const positionCollection = defineCollection({
    type: 'data',
    schema: ({ image: imageFn }) => z.object({
        id: z.number(),
        title: z.string(),
        entity: z.object({
            name: z.string(),
            image: z.object({
                url: imageFn(),
                alt: z.string()
            })
        }),
        achievedOn: z.tuple([z.number(), z.number()]),
        job: reference("jobs")
    })
});

const jobCollection = defineCollection({
    type: 'data',
    schema: z.object({
        id: z.number(),
        description: z.string(),
        responsabilities: z.array(z.string()),
        technologies: z.array(z.string()),
        projects: z.array(reference("projects"))
    })
})

const projectCollection = defineCollection({
    type: 'data',
    schema: z.object({
        id: z.number(),
        name: z.string(),
        responsabilities: z.array(z.string()),
    })
})

export const collection = {
    education: educationCollection,
    positions: positionCollection,
    jobs: jobCollection,
    projects: projectCollection
}