import axios from "axios";

class SettingsService {

    URL = 'http://localhost:3001/settings';

    async getSettings() {
        return (await axios.get(this.URL)).data
    }

    async patchShowCompletedTasks(value){
        return await axios.put(this.URL, {showCompletedTasks: value})
    }

}

export const settingsService = new SettingsService();