"use client";
import { useState } from "react";
import axios from "axios";
export default function Create(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [body, setBlog] = useState("");
    const baseUrl = "http://localhost:8000";
    const postDataUrl = `${baseUrl}/api/blogs/create`;
    const submitBlog =  () => {
        console.log(body);
        axios.post(postDataUrl,{
            title: title,
            description: description,
            body: body
        }).then(() => {
            console.error({ message: "successfully posted data." });

        })
    };
    return(
        <div className="bg-blue-200 min-h-screen flex items-center">
            <div className="w-full">
                <h2 className="text-center text-blue-400 font-bold text-2xl uppercase mb-10">Create Blog</h2>
                <div className="bg-white p-10 rounded-lg shadow md:w-3/4 mx-auto lg:w-1/2">
                        <div className="mb-5">
                            <label htmlFor="title" className="block mb-2 font-bold text-gray-600">Title</label>
                            <input type="text" id="title" name="title" placeholder="Insert Title"
                                   className="border border-gray-300 shadow p-3 w-full rounded mb-"
                            onChange={(e) => {
                                setTitle(e.target.value)
                            }}/>
                        </div>

                        <div className="mb-5">
                            <label htmlFor="description" className="block mb-2 font-bold text-gray-600">Description</label>
                            <input type="text" id="description" name="description" placeholder="Description"
                                   className="border border-red-300 shadow p-3 w-full rounded mb-"
                                   onChange={(e) => {
                                       setDescription(e.target.value)}}
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="body" className="block mb-2 font-bold text-gray-600">Blog Content</label>
                            <input type="text" id="body" name="body" placeholder="Insert Content"
                                   className="border border-red-300 shadow p-3 w-full rounded mb-"
                                   onChange={(e) => {
                                       setBlog(e.target.value)}}
                            />

                        </div>
                    {/*    <input type="file" className="mb-4 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-5 file:text-violet-700 hover:file:bg-violet-100*/}
                    {/*"/>*/}

                        <button onClick={submitBlog} className="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Submit</button>
                </div>
            </div>
        </div>
    )
}