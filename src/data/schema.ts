/**
 * Schema.org helpers for homepage JSON-LD.
 * Rating values mirror what's publicly displayed in TrustSection (4.7/5, 9 reviews).
 * Update both places together when real numbers change.
 */

export function getAggregateRatingSchema() {
  return {
    '@type': 'AggregateRating',
    ratingValue: '4.7',
    reviewCount: '9',
    bestRating: '5',
    worstRating: '1',
  }
}
