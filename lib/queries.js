export const ProductsQuery = `
query Products {
	products(first:6) {
		edges {
      node {
        variants(first:1) {
          edges {
            node {
              id
            }
          }
        }
        title
        handle
        tags
        priceRange {
          minVariantPrice {
            amount
          }
        }
        
        images(first: 1) {
          edges {
            node {
              url
              altText
            }
          }
        }
      }
    }
	}
}
`;

export const SingleProduct = `
  query SingleProduct($handle: String!) {
    product(handle: $handle) {
      variants(first:1) {
    	  edges {
    	    node {
    	      id
    	    }
    	  }
    	}
      handle
      title
      description
      descriptionHtml
      updatedAt
      tags
      priceRange {
        minVariantPrice {
          amount
        }
      }
      images(first: 1) {
        edges {
          node {
            url
            altText
          }
        }
      }
    }
  }
`;

export const CheckoutMutation = `
mutation CheckoutCreate($input: CheckoutCreateInput!) {
  checkoutCreate(input: $input) {
    checkout {
      id
      webUrl
    }
    checkoutUserErrors {
      field
      message
    }
  }
}
`;

// {"input": {"lineItems":
//   [
//       {
//         "variantId": "gid://shopify/ProductVariant/40001950285939",
//         "quantity": 1
//       }
//   ]
// }}

//test mutation, needs to be prepped
// export const CreateSingleOrderDraft = `
// mutation draftOrderCreate($input: DraftOrderInput!) {
//   draftOrderCreate(input: $input) {
//     draftOrder {
//       id
//     }
//     userErrors {
//       field
//       message
//     }
//   }
// }
// `;
//scratch order

/**
 * successful example input so far:
 * 
 {"input": {"lineItems": 
  [
      {
        "variantId": "gid://shopify/ProductVariant/40001950285939",
        "quantity": 1
      }
]}}
 */
