export function Avatar({ src }: { src: string }) {
    return (
        <img
            src={src}
            className="inline-block w-24 h-24 rounded-full mb-4"
            alt="User avatar"
        />
    );
}
