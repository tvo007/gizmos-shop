export const API_URL = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN;

export const callStorefront = async (query, variables = {}) => {
  const res = await fetch (API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'X-Shopify-Storefront-Access-Token': process.env.NEXT_PUBLIC_ACCESS_TOKEN,
    },

    body: JSON.stringify ({query, variables}),
  });

  const json = await res.json ();

  if (json.errors) {
    throw new Error (json.errors);
  }

  return json;
};


