import { useState } from 'react';

interface Photo {
  id: string;
  url: string;
  date: string;
  votes: number;
}

interface PhotosProps {
  photos: Photo[];
}

export default function Photos({ photos }: PhotosProps) {
  const handleUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    // Handle photo upload here
  };

  const handleVote = (id: string) => {
    // Handle photo voting here
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <input type="file" onChange={handleUpload} className="mb-4" />
      {photos.map((photo) => (
        <div key={photo.id} className="mb-4">
          <img src={photo.url} alt="" className="rounded shadow-lg" />
          <div className="flex justify-between items-center mt-2">
            <p className="text-gray-600">{new Date(photo.date).toLocaleDateString()}</p>
            <button onClick={() => handleVote(photo.id)} className="bg-blue-500 text-white p-2 rounded">
              Upvote ({photo.votes})
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}