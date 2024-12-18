import axios from 'axios';

export const searchCompanyLogo = async (query: string) => {
  try {
    const LOGO_DEV_TOKEN = process.env.LOGO_DEV_TOKEN;
    if (!LOGO_DEV_TOKEN) {
      throw new Error(
        'LOGO_DEV_TOKEN is missing. Please set it in your environment variables.'
      );
    }

    const response = await axios.get(
      `https://api.logo.dev/search?q=${encodeURIComponent(query)}`,
      {
        headers: {
          Authorization: `Bearer ${LOGO_DEV_TOKEN}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error('Error fetching company logo:', error);
    throw error;
  }
};
