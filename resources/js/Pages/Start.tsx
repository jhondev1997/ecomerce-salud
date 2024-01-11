import { Link, Head } from '@inertiajs/react';
import { PageProps } from '@/types';
import { HeaderOne } from '@/ui/components/headers/HeaderOne';
import { LayoutOne } from '@/Layouts/LayoutOne';
import { MainOne } from '@/ui/components/mains/MainOne';
import { SpanBarOne } from '@/ui/components/spanbars/SpanBarOne';
import { SectionWhoWeAre } from '@/ui/components/sections/SectionWhoWeAre';
import { JumbotronOne } from '@/ui/components/jumbotrons/JumbotronOne';
import { BannerOffOne } from '@/ui/components/banners/BannerOffOne';
import { ViewBlogs } from '@/ui/blogs/ViewBlogs';
import { BannerMapOne } from '@/ui/components/banners/BannerMapOne';
import { FormContactUs } from '@/ui/components/forms/FormContactUs';
import { FooterOne } from '@/ui/components/footers/FooterOne';
import { PropsProducts } from '@/interfaces/PropsProducts';

export default function Start({ auth, laravelVersion, phpVersion, list_products }: PageProps<{ laravelVersion: string, phpVersion: string, list_products: PropsProducts[] }>) {


  return (
    <LayoutOne title='Inicio'>

      <HeaderOne auth={auth} laravelVersion={laravelVersion} phpVersion={phpVersion} />

      <MainOne/>

      <SpanBarOne />

      <SectionWhoWeAre />

      <JumbotronOne list_products={list_products}/>

      <BannerOffOne rootPage="index"/>

      <ViewBlogs />

      <BannerMapOne />

      <FormContactUs />

      <FooterOne />


    </LayoutOne>
  );
}
