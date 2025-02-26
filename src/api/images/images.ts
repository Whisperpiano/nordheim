export const getBannerImage = async (category: "city" | "mountain") => {
  const screenWidth = window.innerWidth;
  let imageUrl = "";
  if (screenWidth >= 2560) {
    imageUrl = `https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/banner-images/${category}-banner-xl.webp`;
  } else if (screenWidth >= 1920) {
    imageUrl = `https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/banner-images/${category}-banner-lg.webp`;
  } else if (screenWidth >= 1200) {
    imageUrl = `https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/banner-images/${category}-banner-md.webp`;
  } else {
    imageUrl = `https://ppufwgcofnfrgdeqxesf.supabase.co/storage/v1/object/public/banner-images/${category}-banner-sm.webp`;
  }

  const img = new Image();
  img.src = imageUrl;

  return imageUrl;
};
