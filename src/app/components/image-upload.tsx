'use client';

import { UploadDropzone } from "@/utils/uploadthing";
import Image from "next/image";
import { useState } from "react";


const ImageUpload = () => {
    const [imageUrl, setimageUrl] = useState<string>('');


  return (
    <div>
        <UploadDropzone
        appearance={{
            container: {
                border: "1px solid white"
            }
        }}
        endpoint='imageUploader' onClientUploadComplete={(res) => {
        console.log("Files: ", res);
        alert("Upload Completed");
        setimageUrl(res[0].url);
        }}
        onUploadError={(error: Error) => {
          alert(`ERROR! ${error.message}`);
        }} />

        {imageUrl.length ? (
        <div>
            <Image src={imageUrl} alt='my image' width={500} height={300} />
        </div>
    ) : null}
    </div>
  )
}

export default ImageUpload