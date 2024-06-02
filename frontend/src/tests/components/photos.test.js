import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import Photos from '../../components/Photos';
import { fetchPhotos } from '../../flickrAPI';

jest.mock('../../flickrAPI');
jest.mock('react-photo-gallery', () => () => <div>Mocked Gallery Component</div>);

describe('Photos Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should display loading message initially', () => {
    render(<Photos />);
    expect(screen.getByText('📷 Loading... ⏳')).toBeInTheDocument();
  });

  it('should display error message if no photos are fetched', async () => {
    fetchPhotos.mockResolvedValue([]);

    await act(async () => {
      render(<Photos />);
    });

    await waitFor(() => expect(screen.getByText('📷 Well this is embarrassing... 🤷🏼‍♂️')).toBeInTheDocument());
  });

  it('should display Gallery component with photos once fetched', async () => {
    const mockPhotos = [
      { src: 'photo1.jpg', width: 4, height: 3 },
      { src: 'photo2.jpg', width: 1, height: 1 },
    ];
    fetchPhotos.mockResolvedValue(mockPhotos);

    await act(async () => {
      render(<Photos />);
    });

    await waitFor(() => expect(screen.queryByText('📷 Loading... ⏳')).not.toBeInTheDocument());
    expect(screen.getByText('Mocked Gallery Component')).toBeInTheDocument();
  });
});
