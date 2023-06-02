import api from "../services/api";

export default function UpdatePost(post){
    api.put(`/comment/${post._id}`, post)
}