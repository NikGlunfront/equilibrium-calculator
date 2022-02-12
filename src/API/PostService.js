// import axios from "axios";

// export default class PostService {
//     static async getAll(limit = 10, page = 1) {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
//             params : {
//                 _limit: limit,
//                 _page: page,
//             }
//         });
//         return response
//     }

//     static async getById(id) {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id);
        
//         return response
//     }

//     static async getCommentsById(id) {
//         const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + id + '/comments');
        
//         return response
//     }
// }


// example

// const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
//     const response = await PostService.getAll(limit, page);
//     //INTERSECTION OBSERVER API
//     setPosts([...posts, ...response.data]);
//     /*_____________________________________ */
//     const totalCount = response.headers['x-total-count'];
//     setTotalPages(getPageCount(totalCount, limit))
// })