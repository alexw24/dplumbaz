// Define an async function to upload a photo to a Google Business Profile location
export async function uploadPhotoToGoogleBusinessProfile({
  accountId,
  locationId,
  mediaUrl,
  description
}: {
  accountId: string;
  locationId: string;
  mediaUrl: string;
  description: string;
}): Promise<{ result: any }> {
  // Construct the URL for the API endpoint, ensuring the correct path structure
  const url = `https://mybusiness.googleapis.com/v4/accounts/${accountId}/locations/${locationId}/media`;

  // Define the media item payload with the provided mediaUrl, description, and media format
  const mediaItem = {
    mediaFormat: "PHOTO", // Set the media format to PHOTO
    locationAssociation: {
      category: "AT_WORK" // Update the category to AT_WORK as per feedback
    },
    sourceUrl: mediaUrl, // Use the provided media URL
    description: description // Include the description for the media item
  };

  // Make a POST request to the API endpoint using fetchWithZapier
  const response = await fetchWithZapier(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(mediaItem)
  });

  // Use throwErrorIfNotOk to handle any errors in the response
  await response.throwErrorIfNotOk();

  // Return the JSON response from the API
  const result = await response.json();
  return { result };
}