import axios from "axios";

class ChapterService {

    URL = 'http://localhost:3001/chapters';

    async getChapters() {
        const data = await axios.get(this.URL)
        return data
    }

    async sendChapter(chapter) {
        return await axios.post(this.URL, chapter)
    }

    async editChapter(chapter, paramValue){
        return await axios.patch(this.URL + '/' + chapter.id, {title: paramValue})
    }

    async deleteChapter(chapter) {
        return await axios.delete(this.URL + '/' + chapter.id)
    }

}

export const chapterService = new ChapterService();