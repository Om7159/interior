export const Service = {
  async list() {
    return [
      { id: 1, title: 'Residential Design', short_description: 'Complete home transformations', features: ['Space Planning','Material Selection'], image: 'https://images.unsplash.com/photo-1598300053376-1f6c4f0a1d8d?w=1200' },
      { id: 2, title: 'Commercial Spaces', short_description: 'Brand-driven interiors', features: ['Fitout','Branding'], image: 'https://images.unsplash.com/photo-1505691723518-41cbfd9f92e1?w=1200' }
    ];
  }
};
