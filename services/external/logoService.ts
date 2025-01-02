import axios from 'axios';

const LOGO_DEV_URL = 'https://api.logo.dev/search';

export const searchCompanyLogo = async (query: string) => {
  try {
    if (!query) {
      console.error('No query provided.');
      throw new Error('Query parameter is required.');
    }

    const LOGO_DEV_TOKEN = process.env.LOGO_DEV_TOKEN;
    if (!LOGO_DEV_TOKEN) {
      console.error('Missing LOGO_DEV_TOKEN in environment variables.');
      throw new Error(
        'LOGO_DEV_TOKEN is missing. Please set it in your environment variables.'
      );
    }
    const response = await axios.get(
      `${LOGO_DEV_URL}?q=${encodeURIComponent(query)}`,
      {
        headers: {
          Authorization: `Bearer ${LOGO_DEV_TOKEN}`,
        },
      }
    );

    return response.data.map(
      (company: { logo_url: string; domain: string }) => ({
        ...company,
        logo: company.logo_url,
      })
    );
  } catch (error) {
    console.error('Error fetching company logo:', error);
    throw new Error(`Error fetching company logo: ${error}`);
  }
};
