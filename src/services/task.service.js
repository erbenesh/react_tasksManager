import axios from "axios";

class TaskService {

    URL = 'http://localhost:3001/tasks';

    async getTasks() {
        const data = await axios.get(this.URL)
        return data
    }

    async sendTask(obj) {
        return await axios.post(this.URL, obj)
    }

    async completeTask(obj){
        return await axios.patch(this.URL + '/' + obj.id, {isTaskDone: !obj.isTaskDone})
    }

    async deleteTask(obj) {
        return await axios.delete(this.URL + '/' + obj.id)
    }


}

export const taskService = new TaskService();