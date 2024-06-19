import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Photos } from '../../components/Photos';
import { fetchPhotos } from '../../flickrAPI';

jest.mock('../../flickrAPI');
jest.mock('react-photo-gallery', () => ({ photos, ...props }) => (
  <div data-testid="gallery">
    {photos.map((photo, index) => (
      <img
        key={index}
        src={photo.src}
        alt={`Photo ${index}`}
        data-testid={`photo-${index}`}
      />
    ))}
  </div>
));

describe('Photos Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should display photos from API', async () => {
    const mockPhotos = [
      { id: '1', src: 'photo1.jpg', width: 4, height: 3 },
      { id: '2', src: 'photo2.jpg', width: 1, height: 1 },
    ];
    fetchPhotos.mockResolvedValue(mockPhotos);

    render(<Photos />);

    expect(screen.getByText('📷 Loading... ⏳')).toBeInTheDocument();

    await waitFor(() => {
      // Check that the loading text is removed
      expect(screen.queryByText('📷 Loading... ⏳')).toBeNull();

      // Check that the gallery is present
      expect(screen.getByTestId('gallery')).toBeInTheDocument();

      // Check that at least one photo is rendered
      const imgElements = screen.queryAllByRole('img');
      expect(imgElements.length).toBeGreaterThanOrEqual(1);
    });
  });
});


