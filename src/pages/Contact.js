import React from "react";
import ContactIcons from "../components/ContactIcons";
import Form from "../components/Form";

function Contact() {
    const cssClasses = [
        "bg-gradient-to-r",
        "from-blue-500",
        "via-purple-500",
        "to-pink-500",
        "animate-btn-gradient",
        "bg-clip-text",
        "text-transparent",
    ];

    const getGetInTouchText = () => document.querySelector(".contact-title");

    const handleMouseEnter = (e) => {
        const getInTouch = getGetInTouchText();
        cssClasses.forEach((item) => {
            if (item !== cssClasses[5] && item !== cssClasses[6])
                e.target.classList.add(item);
            getInTouch.classList.add(item);
        });

        getInTouch.classList.remove("text-gray-300");
        // getInTouch.classList.add("bg-clip-text");
        // getInTouch.classList.add("text-transparent");
    };

    const handleMouseLeave = (e) => {
        const getInTouch = getGetInTouchText();
        cssClasses.forEach((item) => {
            e.target.classList.remove(item);
            getInTouch.classList.remove(item);
        });
        getInTouch.classList.add("text-gray-300");
        // getInTouch.classList.remove("bg-clip-text");
        // getInTouch.classList.remove("text-transparent");
    };

    return (
        <div className="w-10/12 m-auto pb-36 flex">
            <div className="w-1/2">
                <div className="w-full flex flex-col text-white pt-8">
                    <h1 className="contact-title text-6xl font-semibold text-gray-300">
                        Get in touch!
                    </h1>
                    <p className="text-3xl text-gray-600  pl-1 pt-3">
                        How can I help you?
                    </p>
                    <p className="text-3xl text-gray-300 pl-2 mt-20 tracking-wide">
                        Leave a message
                    </p>
                    <Form
                        handleMouseEnter={handleMouseEnter}
                        handleMouseLeave={handleMouseLeave}
                    />
                </div>
            </div>
            <div className="w-1/2 flex justify-center items-end">
                <ContactIcons />
            </div>
        </div>
    );
}

export default Contact;
