import { defineField, defineType } from 'sanity';

export const productSchema = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'productName',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required().error('Product Name is required'),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (Rule) =>
        Rule.required().error('Category is required'),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (Rule) =>
        Rule.required()
          .min(0)
          .error('Price must be a positive number'),
    }),
    defineField({
      name: 'slug',
      title: 'slug',
      type: 'slug',
      options:{
        source:'productName'
      },
      validation: (Rule) =>
        Rule.required()
          .error('slug is required'),
    }),
    

    defineField({
      name: 'inventory',
      title: 'Inventory',
      type: 'number',
      validation: (Rule) =>
        Rule.required()
          .min(0)
          .error('Inventory must be zero or a positive number'),
    }),
    defineField({
      name: 'colors',
      title: 'Colors',
      type: 'array',
      of: [{ type: 'string' }],
      validation: (Rule) =>
        Rule.max(10).error('You can add up to 10 colors'),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'In Stock', value: 'inStock' },
          { title: 'Out of Stock', value: 'outOfStock' },
          { title: 'Discontinued', value: 'discontinued' },
        ],
      },
      validation: (Rule) => Rule.required().error('Status is required'),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) =>
        Rule.required().error('An image is required for the product'),
    }),
    defineField({
      name: 'images',
      title: 'Image Path',
      type: 'url',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) =>
        Rule.required()
          .min(10)
          .max(500)
          .error('Description must be between 10 and 500 characters'),
    }),
  ],
});
