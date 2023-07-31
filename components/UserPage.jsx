import React, { useState } from "react";
import Image from "next/image";
import styles from "./UserPage.module.css";
import Post from "./Post";

const UserPage = ({ user }) => {
    const [img, setImg] = useState(user.profile_image.large);
    const [view, setView] = useState("grid");
    const handleViewToggle = () => {
        if (view === "grid") {
            setView("list");
        } else {
            setView("grid");
        }
    };

    console.log(user);
    return (
        <div className={styles.userPage}>
            <div className={styles.userInfo}>
                <Image
                    className={styles.userDP}
                    src={img}
                    width={500}
                    height={500}
                    alt=""
                    loading="lazy"
                    onError={(error) => {
                        console.log(error);
                        setImg("/fallback.jpg");
                    }}
                />

                <div className={styles.infoContainer}>
                    <h1 className={styles.name}>{user.name}</h1>
                    <div className={styles.userLocation}>{user.location}</div>
                    <p className={styles.userBio}>{user.bio}</p>

                    {/* statistics */}
                    <div className={styles.userStats}>
                        <div className={styles.userStat}>
                            <h3 className={styles.statNumber}>
                                {user.followers_count}
                            </h3>
                            <div className={styles.statName}>Followers</div>
                        </div>
                        <div className={styles.userStat}>
                            <h3 className={styles.statNumber}>
                                {user.following_count}
                            </h3>
                            <div className={styles.statName}>Following</div>
                        </div>
                        <div className={styles.userStat}>
                            <h3 className={styles.statNumber}>
                                {user.total_photos}
                            </h3>
                            <div className={styles.statName}>Photos</div>
                        </div>
                    </div>
                </div>

                <hr className={styles.divider} />
            </div>

            {/* //implement user gallery here */}

            {/* toggle gallery view */}
            <div className={styles.galleryViewSwitch}>
                <button
                    onClick={handleViewToggle}
                    className={styles.buttonSetView}
                >
                    {view === "grid" ? "Grid view" : "List view"}
                </button>
            </div>

            {/* gallery */}

            {view === "grid" ? (
                // Grid-view
                <div className={styles.userGallery}>
                    {user.photos.map((photo) => (
                        <div className={styles.userPhoto} key={photo.id}>
                            <Image
                                src={photo.urls.full}
                                width={1000}
                                height={1000}
                                className={styles.userGalleryImage}
                                alt=""
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            ) : (
                // List-view
                <div className={styles.userGalleryListView}>
                    {user.photos.map((photo) => (
                        <Post
                            user={user}
                            location={user.location}
                            likes={user.likes}
                            downloads={user.downloads}
                            image={photo.urls}
                            key={photo.id}
                            isLast={false}
                            description={""}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default UserPage;
