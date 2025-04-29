import UnityGame from "@/components/UnityGame";

export default function FPSGamingPage() {
    return (
        <section className="py-12 px-8">
            <h2 className="text-2xl font-bold mb-6">Play My Unity Game</h2>
            <UnityGame src={"/unity-game/fps/index.html"}/>
        </section>
    );
}