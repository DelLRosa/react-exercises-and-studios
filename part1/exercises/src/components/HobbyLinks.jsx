export default function HobbyLinks () {
    const hobbyLinks = ["https://www.youtube.com/user/MechaGaikotsu","https://www.ravelry.com/"];
    return (
        <div>
            <a href={hobbyLinks[0]}> MechaGaikotsu Youtube Channel</a>
            <a href={hobbyLinks[1]}> Ravelry</a>
        </div>

    );
}