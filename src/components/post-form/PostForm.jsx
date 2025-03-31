// import React, { useCallback } from "react";
// import { useForm } from "react-hook-form";
// import { Button, Input, RTE, Select } from "..";
// import appwriteService from "../../appwrite/config";
// import { useNavigate } from "react-router-dom";
// import { useSelector } from "react-redux";

// export default function PostForm({ post }) {
//     const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
//         defaultValues: {
//             title: post?.title || "",
//             slug: post?.$id || "",
//             content: post?.content || "",
//             status: post?.status || "active",
//         },
//     });

//     const navigate = useNavigate();
//     const userData = useSelector((state) => state.auth.userData);

//     // const submit = async (data) => {
//     //     if (post) {
//     //         const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

//     //         if (file) {
//     //             appwriteService.deleteFile(post.featuredImage);
//     //         }
//     //         console.log( "this is post "  , post)
//     //         const dbPost = await appwriteService.updatePost(post.$id, {
//     //             ...data,
//     //             featuredImage: file ? file.$id : undefined,
//     //         });

//     //         if (dbPost) {
//     //             navigate(`/post/${dbPost.$id}`);
//     //         }
//     //     } else {
//     //         const file = await appwriteService.uploadFile(data.image[0]);

//     //         if (file) {
//     //             const fileId = file.$id;
//     //             data.featuredImage = fileId;
//     //             console.log("this is user data " , userData)
//     //             const dbPost = await appwriteService.createPost({ ...data, userId: userData.$id });

//     //             if (dbPost) {
//     //                 navigate(`/post/${dbPost.$id}`);
//     //             }
//     //         }
//     //     }
//     // };

//     const submit = async (data) => {

//         if (!userData?.$id) {
//                     console.error("User data is missing. Make sure the user is logged in.");
//                     return;
//                 }

//         let fileId = null;
    
//         if (data.image?.[0]) {
//             const file = await appwriteService.uploadFile(data.image[0]);
    
//             if (!file) {
//                 console.error("File upload failed");
//                 return;
//             }
//             fileId = file.$id;
//         }
    
//         // Generate a valid slug
//         let slug = data.slug
//             .toLowerCase()
//             .trim()
//             .replace(/\s+/g, "-") // Convert spaces to hyphens
//             .replace(/[^a-z0-9-_]/g, "") // Remove invalid characters
//             .slice(0, 30); // Keep slug length within a reasonable range
    
//         // Ensure uniqueness by appending a short ID if needed
//         const uniqueId = nanoid(5); // Generates a 5-character unique ID
//         slug = `${slug}-${uniqueId}`.slice(0, 36); // Ensure it stays within 36 characters

//         console.log("generated slug : ",slug)
//         console.log("slug length : ", slug.length)
    
//         if (post) {
//             const dbPost = await appwriteService.updatePost(post.$id, {
//                 ...data,
//                 featuredImage: fileId || post.featuredImage,
//             });
    
//             if (dbPost) {
//                 navigate(`/post/${dbPost.$id}`);
//             }
//         } else {
//             const dbPost = await appwriteService.createPost({
//                 documentId: slug, // Use generated slug as document ID
//                 ...data,
//                 featuredImage: fileId,
//                 userId: userData.$id,
//             });
    
//             if (dbPost) {
//                 navigate(`/post/${dbPost.$id}`);
//             }
//         }
//     };


//     const slugTransform = useCallback((value) => {
//         if (value && typeof value === "string")
//             return value
//                 .trim()
//                 .toLowerCase()
//                 .replace(/[^a-zA-Z\d\s]+/g, "-")
//                 .replace(/\s/g, "-");

//         return "";
//     }, []);

//     React.useEffect(() => {
//         const subscription = watch((value, { name }) => {
//             if (name === "title") {
//                 setValue("slug", slugTransform(value.title), { shouldValidate: true });
//             }
//         });

//         return () => subscription.unsubscribe();
//     }, [watch, slugTransform, setValue]);

//     return (
//         <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
//             <div className="w-2/3 px-2">
//                 <Input
//                     label="Title :"
//                     placeholder="Title"
//                     className="mb-4"
//                     {...register("title", { required: true })}
//                 />
//                 <Input
//                     label="Slug :"
//                     placeholder="Slug"
//                     className="mb-4"
//                     {...register("slug", { required: true })}
//                     onInput={(e) => {
//                         setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
//                     }}
//                 />
//                 <RTE label="Content :" name="content" control={control} defaultValue={getValues("content")} />
//             </div>
//             <div className="w-1/3 px-2">
//                 <Input
//                     label="Featured Image :"
//                     type="file"
//                     className="mb-4"
//                     accept="image/png, image/jpg, image/jpeg, image/gif"
//                     {...register("image", { required: !post })}
//                 />
//                 {post && (
//                     <div className="w-full mb-4">
//                         <img
//                             src={appwriteService.getFilePreview(post.featuredImage)}
//                             alt={post.title}
//                             className="rounded-lg"
//                         />
//                     </div>
//                 )}
//                 <Select
//                     options={["active", "inactive"]}
//                     label="Status"
//                     className="mb-4"
//                     {...register("status", { required: true })}
//                 />
//                 <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
//                     {post ? "Update" : "Submit"}
//                 </Button>
//             </div>
//         </form>
//     );
// }


import React, { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { nanoid } from "nanoid";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);



    const submit = async (data) => {
        if (!userData?.$id) {
            console.error("User data is missing. Make sure the user is logged in.");
            return;
        }

        let fileId = null;
        if (data.image?.[0]) {
            const file = await appwriteService.uploadFile(data.image[0]);
            if (!file) {
                console.error("File upload failed");
                return;
            }
            fileId = file.$id;
        }

        let slug = data.slug
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "-")
            .replace(/[^a-z0-9-_]/g, "")
            .slice(0, 30);

        slug = `${slug}-${nanoid(5)}`.slice(0, 36);

        if (post) {
            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: fileId || post.featuredImage,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            const dbPost = await appwriteService.createPost({
                documentId: slug,
                ...data,
                featuredImage: fileId,
                userId: userData.$id,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4">
            {/* Left Section - Title, Slug, and Content */}
            <div className="lg:col-span-2 space-y-4">
                <Input
                    label="Title:"
                    placeholder="Enter title"
                    className="w-full"
                    {...register("title", { required: true })}
                />
                <Input
                    label="Slug:"
                    placeholder="Enter slug"
                    className="w-full"
                    {...register("slug", { required: true })}
                    onInput={(e) => {
                        setValue("slug", slugTransform(e.currentTarget.value), { shouldValidate: true });
                    }}
                />
                <RTE label="Content:" name="content" control={control} defaultValue={getValues("content")} />
            </div>

            {/* Right Section - Image Upload and Status */}
            <div className="space-y-4">
                <Input
                    label="Featured Image:"
                    type="file"
                    className="w-full"
                    accept="image/png, image/jpg, image/jpeg, image/gif"
                    {...register("image", { required: !post })}
                />
                {post && (
                    <div className="w-full">
                        <img
                            src={appwriteService.getFilePreview(post.featuredImage)}
                            alt={post.title}
                            className="rounded-lg w-full"
                        />
                    </div>
                )}
                <Select options={["active", "inactive"]} label="Status" className="w-full" {...register("status", { required: true })} />
                <Button type="submit" bgColor={post ? "bg-green-500" : undefined} className="w-full">
                    {post ? "Update" : "Submit"}
                </Button>
            </div>
        </form>
    );
}
