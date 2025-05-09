export default function GoogleMap() {
    return (
        <iframe
            // width="800"
            height="432"
            style={{
                border: 0
            }}
            className="rounded-lg shadow-md md:w-[800px] w-[300px]"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}
    &q=${encodeURI("PC Clinic, Burton and South Derbyshire College Lichfield Street, Burton-on-Trent DE14 3RL")}`}>
        </iframe>
    )
}