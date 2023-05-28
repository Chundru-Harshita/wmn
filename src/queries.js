import {
    gql
} from "@apollo/client";

export const EVENTS = gql`
    query GetEvents {
        event {
            id
            title 
            description
            image
            created_at
            organizer {
                name
            }
        }
    }
`

export const SET_BLOG_POST_PUBLISHED = gql`
    mutation SetBlogPostPublished($id: Int!, $published: Boolean!) {
        update_blog_post(
            where:{
                id: {
                    _eq: $id
                }
            },
            _set:{
                is_published: $published
            }
        ) {
            affected_rows
        }
    }
`

export const INSERT_EVENT = gql`
    mutation InsertEvent (
        $title: String!
        $description: String!
        $location: String!
        $registration_link: String!
        $expiry_date: timestamptz !
        $image: String!
    ) {
        insert_event_one(object: {
            title: $title
            description: $description
            location: $location,
            registration_link: $registration_link,
            expiry_date: $expiry_date,
            image: $image,
        }) {
            id
        }
    }
`