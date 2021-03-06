import React from 'react'
import moment from 'moment'
import Image from 'next/image'
import Link from 'next/link'

const FeaturedPostCard = ({ post }) => (
  <div className="relative h-96">
    <div className="absolute rounded-lg bg-center bg-no-repeat bg-cover shadow-md inline-block w-full h-96" style={{ backgroundImage: `url('${post.featuredImage.url}')` }} />
    <div className="flex flex-col rounded-lg p-6 items-end justify-end absolute w-full h-full">
        <p className="text-white text-shadow font-semibold text-sm">{moment(post.createdAt).format('MMM DD, YYYY')}</p>
        <p className="text-white text-shadow font-semibold text-sm">{post.title}</p>
    </div>
    <div className="absolute rounded-lg bg-center bg-gradient-to-b opacity-20 hover:bg-none from-gray-400 via-gray-700 to-black w-full h-96">
        <Link href={`/post/${post.slug}`}><span className="cursor-pointer absolute w-full h-full" /></Link>
    </div>
  </div>
);

export default FeaturedPostCard;