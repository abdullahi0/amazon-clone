import axios from 'axios';

const instance =axios.create({
    baseURL:'https://us-central1-challenge-4b0fe.cloudfunctions.net/api' /// cloud function url
});
// http://localhost:5001/challenge-4b0fe/us-central1/api
export default instance;