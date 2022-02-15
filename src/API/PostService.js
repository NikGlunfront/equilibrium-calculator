import axios from "axios";

const apiUrls = {
    addLangUrl: 'http://94.137.242.252:7777/api/TextBlocks/AddLanguage',
    addPageTabUrl: 'http://94.137.242.252:7777/api/TextBlocks/AddTab',
    addTextOnPageUrl: 'http://94.137.242.252:7777/api/TextBlocks/AddTextBlockToTab',
}

export default class PostTextService {
    static async addLang () {
        axios({
            method: 'post',
            headers: { 'content-type': 'application/json' },
            url: apiUrls.addLangUrl,
            data: {
                texts: [
                    {language: 'rus', text: 'какой-то текст'},
                    {language: 'eng', text: 'some text'},
                    {language: 'tur', text: 'turk-text here'},
                ],
                tab: 'talents'
            }
        });
    }

    static async addPageTab (tabName) {
        axios({
            method: 'post',
            headers: { 'content-type': 'application/json' },
            url: apiUrls.addPageTabUrl,
            data: {
                tab: tabName
            }
        });
    }

    static async addTextOnPage () {
        axios({
            method: 'post',
            headers: { 'content-type': 'application/json' },
            url: apiUrls.addTextOnPageUrl,
            data: {
                texts: [
                    {language: 'rus', text: 'какой-то текст'},
                    {language: 'eng', text: 'some text'},
                    {language: 'tur', text: 'turk-text here'},
                ],
                tab: 'talents'
            }
        });
    }
}


// example

// const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit, page) => {
//     const response = await PostService.getAll(limit, page);
//     //INTERSECTION OBSERVER API
//     setPosts([...posts, ...response.data]);
//     /*_____________________________________ */
//     const totalCount = response.headers['x-total-count'];
//     setTotalPages(getPageCount(totalCount, limit))
// })