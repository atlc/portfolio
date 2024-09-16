const REDIRECTS = {
    ST: "https://drive.google.com/file/d/1ehDYhQQ1Lt36eA6Cd7H69YX7kSLyr5Az/view?usp=sharing",
};

export const checkForRedirects = () => {
    const url = window.location.href;

    if (url.includes("/r/")) {
        const match = Object.entries(REDIRECTS).find(([key]) => url.includes(key));

        if (match) {
            window.location.href = match[1];
        }
    }
};
