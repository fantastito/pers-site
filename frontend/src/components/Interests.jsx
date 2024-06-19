export const Interests = ({interestsData}) => {
    if (!interestsData) {
        return <div className="text-center text-gray-600 text-xl">No Interests data.</div>;
    }

    return (
        <div className="pt-8 pb-12 p-4">
            <h2 className="text-2xl text-center font-bold text-gray-800 mb-6">Talk to me about...</h2>

            <ul className="flex flex-wrap gap-2 justify-center">
                {interestsData.map((interest, i) => (
                    <li key={i} className="bg-gray-200 rounded-full px-3 py-1 text-sm text-gray-700">{interest}</li>
                ))}
            </ul>
        </div>
    );
};