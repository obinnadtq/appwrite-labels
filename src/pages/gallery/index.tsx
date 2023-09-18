import React, { useState } from "react";
import { getUserObject } from "../../appwrite";
import { CarGallery } from "../../components/CarGallery";


export const getServerSideProps = async () => {
    let subscribed = false;
    const users = getUserObject();

    try {
        await users.updateLabels(
            '<UserID>',
            ['subscriber']
        );
        subscribed = true;

    } catch (e) {
        console.log(e);
        subscribed = false
    }

    return { props: { subscribed: subscribed } }
}

export default function Gallery({ subscribed }) {
    const [isUserSubscribed, setIsUserSubscribed] = useState<boolean>(false);

    const handleSubscription = () => {
        setIsUserSubscribed(subscribed);
        if (subscribed){
            alert('You have subscribed successfully');
        }
        else{
            alert('Your subscription was not successful');
        }
    }

    if (isUserSubscribed) {
        return (
            <div className="m-auto">
                <CarGallery />
            </div>
        )
    }
    else {
        return (
            <div className="flex h-full flex-col justify-center items-center">
                <p className="text-2xl mb-5 font-bold"> You do not have access to view this page</p>
                <button className="bg-fuchsia-200" onClick={handleSubscription}>Click to subscribe</button>
            </div>
        )
    }
}
