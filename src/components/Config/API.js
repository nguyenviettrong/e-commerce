import axios from 'axios';
export default function CallApi (method, endpoint, data, headers=null) {
    return (
        axios({
            method: method,
            url: 'http://nguyenviettrong.com/api/'+endpoint,
            data: data,
            headers:headers
        })
    )
}