import { MetadataRoute } from "next";

export const rtuliHtmlCss = [
  "/rtuliHtmlCss/1_animacia/1_transformacia",
  "/rtuliHtmlCss/1_animacia/2_tranziciebi",
  "/rtuliHtmlCss/1_animacia/3_keyframes",
  "/rtuliHtmlCss/2_xelmisawvdomoba/1_shesavali_xelmisawvdomobaze_webshi",
  "/rtuliHtmlCss/2_xelmisawvdomoba/2_web_kontentis_xelmisawvdomobis_guideline_wcag",
  "/rtuliHtmlCss/2_xelmisawvdomoba/3_semantikuri_html",
  "/rtuliHtmlCss/2_xelmisawvdomoba/4_xelmisawvdomi_ferebi",
  "/rtuliHtmlCss/2_xelmisawvdomoba/5_navigacia_klaviaturit",
  "/rtuliHtmlCss/2_xelmisawvdomoba/6_shinaarsiani_teqsti",
  "/rtuliHtmlCss/2_xelmisawvdomoba/7_wai_aria",
  "/rtuliHtmlCss/2_xelmisawvdomoba/8_xelmisawvdomobis_shemowmeba",
  "/rtuliHtmlCss/3_responsuli_dizaini/1_shesavali_responsul_dizainshi",
  "/rtuliHtmlCss/3_responsuli_dizaini/2_bunebrivi_responsuloba",
  "/rtuliHtmlCss/3_responsuli_dizaini/3_responsuli_suratebi",
  "/rtuliHtmlCss/3_responsuli_dizaini/4_media_queries",
  "/rtuliHtmlCss/3_responsuli_dizaini/5_proeqti_mtavari_gverdi",
];

export const sashualoDonisHtmlCss = [
  "/sashualoDonisHtmlCss/1_sashualo_html_konceptebi/1_svg",
  "/sashualoDonisHtmlCss/1_sashualo_html_konceptebi/2_cxrili",
  "/sashualoDonisHtmlCss/2_sashualo_css_konceptebi/1_css_erteulebi",
  "/sashualoDonisHtmlCss/2_sashualo_css_konceptebi/2_meti_teqstis_stili",
  "/sashualoDonisHtmlCss/2_sashualo_css_konceptebi/3_meti_css_stili",
  "/sashualoDonisHtmlCss/2_sashualo_css_konceptebi/4_rtuli_css_seleqtorebi",
  "/sashualoDonisHtmlCss/2_sashualo_css_konceptebi/5_pozicionireba",
  "/sashualoDonisHtmlCss/2_sashualo_css_konceptebi/6_css_funqciebi",
  "/sashualoDonisHtmlCss/2_sashualo_css_konceptebi/7_css_cvladebi",
  "/sashualoDonisHtmlCss/2_sashualo_css_konceptebi/8_brauzertan_shetavsebadoba",
  "/sashualoDonisHtmlCss/3_formebi/1_shesavali_formebshi",
  "/sashualoDonisHtmlCss/3_formebi/2_formis_validacia",
  "/sashualoDonisHtmlCss/3_formebi/3_proeqti_registraciis_forma",
  "/sashualoDonisHtmlCss/4_grid/1_shesavali_gridshi",
  "/sashualoDonisHtmlCss/4_grid/2_gridis_sheqmna",
  "/sashualoDonisHtmlCss/4_grid/3_grid_elementebis_pozicionireba",
  "/sashualoDonisHtmlCss/4_grid/4_rtuli_gridis_stilebi",
  "/sashualoDonisHtmlCss/4_grid/5_flexbox_da_grid_ertad",
  "/sashualoDonisHtmlCss/4_grid/6_proeqti_adminis_paneli",
];

export const fundamentalebi = [
  "/fundamentalebi/1_gacnoba/1_kursis_shesaxeb",
  "/fundamentalebi/1_gacnoba/2_ras_aketebs_web_developeri",
  "/fundamentalebi/1_gacnoba/3_kodireba_aris_rtuli",
  "/fundamentalebi/1_gacnoba/4_motivacia_da_maindseti",
  "/fundamentalebi/1_gacnoba/5_shemogviertdi",
  "/fundamentalebi/2_shemzadeba/1_rogor_mushaobs_webi",
  "/fundamentalebi/2_shemzadeba/2_instalacia",
  "/fundamentalebi/3_html_fundamentalebi/1_html_da_css_shesavali",
  "/fundamentalebi/3_html_fundamentalebi/2_html_chonchxi",
  "/fundamentalebi/3_html_fundamentalebi/3_teqsttan_mushaoba",
  "/fundamentalebi/3_html_fundamentalebi/4_siebi",
  "/fundamentalebi/3_html_fundamentalebi/5_linkebi_da_fotoebi",
  "/fundamentalebi/3_html_fundamentalebi/6_proeqti_receptebi",
  "/fundamentalebi/4_css_fundamentalebi/1_css_shesavali",
  "/fundamentalebi/4_css_fundamentalebi/2_kaskadi",
  "/fundamentalebi/4_css_fundamentalebi/3_html_da_css_inspeqtireba",
  "/fundamentalebi/4_css_fundamentalebi/4_box_model",
  "/fundamentalebi/4_css_fundamentalebi/5_block_da_inline",
  "/fundamentalebi/5_flexbox/1_flexbox_shesavali",
  "/fundamentalebi/5_flexbox/2_gazrda_da_shekumshva",
  "/fundamentalebi/5_flexbox/3_mimartulebebi",
  "/fundamentalebi/5_flexbox/4_ganlageba",
  "/fundamentalebi/5_flexbox/5_reset_css",
  "/fundamentalebi/5_flexbox/6_proeqti_landing_page",
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const rtuliHtmlCssLinks: MetadataRoute.Sitemap = rtuliHtmlCss.map((link) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/courses${link}`,
    lastModified: "2024-04-09T10:41:46.588Z",
  }));

  const sashualoDonisHtmlCssLinks: MetadataRoute.Sitemap =
    sashualoDonisHtmlCss.map((link) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/courses${link}`,
      lastModified: "2024-04-09T10:42:34.588Z",
    }));

  const fundamentalebiLinks: MetadataRoute.Sitemap = fundamentalebi.map(
    (link) => ({
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/courses${link}`,
      lastModified: "2024-04-09T10:45:20.588Z",
    })
  );

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/courses`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/contribute`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/courses/fundamentalebi`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/courses/sashualoDonisHtmlCss`,
    },
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/courses/rtuliHtmlCss`,
    },
    ...rtuliHtmlCssLinks,
    ...sashualoDonisHtmlCssLinks,
    ...fundamentalebiLinks,
  ];
}
