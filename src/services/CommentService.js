import Api from 'utils/ApiService';
import { ApiConstants } from 'constants/api-constants';
import Axios from 'axios';

const fetchCommentJson = async () => {
    const response = await Api.get('/comments?_limit=8');
    if (response.state >= 400) {
        throw new Error("Error from fetching")
    }

    return response.data;
};


export function getMetaData() {
    return Axios.get(ApiConstants.BASE_URL + '/comments')
}

export { fetchCommentJson };
