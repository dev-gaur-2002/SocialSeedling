import React, { useRef, useCallback, useState } from "react";
import Image from "next/image";
import styles from "./Post.module.css";
import Link from "next/link";
import LikeOutlined from "../public/icons/like-icon-outlined.png";
import LikeSolid from "../public/icons/like-icon-solid.png";
import Download from "../public/icons/download-icon.png";

const Post = (props) => {
    const [isLiked, setIsLiked] = useState(false);

    const imageContainers = document.querySelectorAll(".imageContainer");
    imageContainers.forEach((div) => {
        const image = div.querySelector("img");

        function loaded() {
            div.classList.add("loaded");
        }

        if (img.complete) {
            loaded();
            imageContainers.forEach((container) => {
                container.classList.add("remove");
            });
        } else {
            img.addEventListeneer("load", loaded);
        }
    });

    const observer = useRef();
    const lastElement = useCallback(
        (Element) => {
            console.log("here");
            if (observer.current) {
                observer.current.disconnect();
            }
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                    props.setPage(props.page + 1);
                }
            });
            if (Element) observer.current.observe(Element);
        },
        [observer],
    );

    const [img, setImg] = useState(props.user.profile_image.large);
    const navigatingPath = `/users/${props.user.username}`;
    return (
        <>
            <div className={styles.container}>
                <div className={styles.userInfoContainer}>
                    <Link href={navigatingPath}>
                        <div>
                            <Image
                                className={styles.profileImage}
                                src={img}
                                width={100}
                                height={100}
                                alt="User Image"
                                loading="lazy"
                                onError={() => setImg("/fallback.jpg")}
                            />
                        </div>
                    </Link>
                    <div className={styles.userInfo}>
                        <div className={styles.userName}>{props.user.name}</div>
                        <div className={styles.userLocation}>
                            {props.user.location}
                        </div>
                    </div>
                </div>
                <div className={styles.imageSection}>
                    <div
                        className={styles.imageContainer}
                        style={{
                            backgroundImage: `url(${props.image.small})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        <Image
                            className={styles.postImage}
                            src={props.image.raw}
                            width={640}
                            height={427}
                            alt="Feed Image"
                            loading="lazy"
                        />
                    </div>
                    <div className={styles.postActionsContainer}>
                        <div
                            className={styles.postAction}
                            onClick={() => setIsLiked(!isLiked)}
                        >
                            <Image
                                className={styles.actionIcon}
                                width={32}
                                height={32}
                                src={isLiked ? LikeSolid : LikeOutlined}
                                alt="like-button"
                            />
                            <span className={styles.actionCounter}>
                                {isLiked ? props.likes + 1 : props.likes}
                            </span>
                        </div>
                        <div className={styles.postAction}>
                            <Image
                                className={styles.actionIcon}
                                width={32}
                                height={32}
                                src={Download}
                                alt="like-button"
                            />
                            <span className={styles.actionCounter}>
                                {props.downloads}
                            </span>
                        </div>
                    </div>
                </div>
                {props.isLast ? (
                    <div
                        className={styles.descriptionContainer}
                        ref={lastElement}
                    >
                        {props.description && (
                            <div>
                                <span className={styles.descriptionUser}>
                                    {props.user.username}
                                </span>
                                <span className={styles.description}>
                                    {props.description}
                                </span>
                            </div>
                        )}
                    </div>
                ) : (
                    <div className={styles.descriptionContainer}>
                        {props.description && (
                            <div>
                                <span className={styles.descriptionUser}>
                                    {props.user.username}
                                </span>
                                <span className={styles.description}>
                                    {props.description}
                                </span>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default Post;
