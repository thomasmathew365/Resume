import { CommentIcon } from '@sanity/icons';

export default {
    name: 'wall',
    type: 'document',
    title: 'Wall',
    icon: CommentIcon,
    fields: [
        {
            name: 'name',
            type: 'string',
        },
        {
            title: 'Approved',
            name: 'approved',
            type: 'boolean',
            description: "Comments won't show on the site without approval",
        },
        {
            name: 'email',
            type: 'string',
        },
        {
            name: 'comment',
            type: 'text',
        },
        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        }
    ],
    preview: {
        select: {
            name: 'name',
            comment: 'comment',
            email: 'email',
        },
        prepare({ name, comment, email, publishedAt }) {
            return {
                name, comment, email, publishedAt
            }
        },
    },
}
