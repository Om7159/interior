export const BlogPost = {
  async list() {
    return [
      { id: 1, title: 'Designing Light', excerpt: 'How light transforms space', featured_image: 'https://images.unsplash.com/photo-1505691723518-41cbfd9f92e1?w=1200', created_date: Date.now(), read_time: '5 min', category: 'Inspiration' },
      { id: 2, title: 'Material Choices', excerpt: 'Choosing materials that last', featured_image: 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?w=1200', created_date: Date.now(), read_time: '6 min', category: 'Advice' }
    ];
  }
};
