import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.content_img}
                     src="https://images.wallpaperscraft.ru/image/single/zakat_nebo_oblaka_121865_300x168.jpg"
                     alt="img content"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>
    )
}