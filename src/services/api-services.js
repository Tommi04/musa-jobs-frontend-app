import axios from 'axios'
class ApiServices{
    //in onUploadProgress c'è la funzione da UserProfile.vue
    uploadUserPhoto(file, onUploadProgress){
        // per spedire una foto dobbiamo creare un form data per la request all'api
        const formData = new FormData();
        formData.append('photo', file);

            // verificare che su laravel c'è
        // in questo modo torno la promise
        return axios
                .post('upload-user-photo', formData, {
                    onUploadProgress
                })
    }

    manageSkill(data){
        return axios
                    .post('user-skill-add',data);
    }

    removeSkill(id){
        return axios
                    .post('user-skill-remove', {skill_id: id});
    }
}

//qua esport la classe e ritornerò la promises
export default new ApiServices();