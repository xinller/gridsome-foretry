<template>
	<Layout>
		<Hero></Hero>
		<Projects :list="$page.projects.edges" :pageInfo="$page.projects.pageInfo"></Projects>
		<LatestJournal :list="$page.journals.edges"></LatestJournal>
	</Layout>
</template>
<page-query>
query($page : Int){
  projects:allStrapiProject(perPage: 4, page: $page, sortBy:"id" ,order:ASC) @paginate{
		pageInfo {
      totalPages
      currentPage
    }
    edges{
      node{
        id
        title
        content
        thumb{
          url
          name
          width
          height
        }
        categories{id,title}
      }
    }
  }

  journals : allStrapiJournal{
    edges{
      node{
        id
        title
        content
        thumb{
          url
          name
          width
          height
        }
        categories{id,title}
      }
    }
  }
}

</page-query>
<script>
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import LatestJournal from '@/components/LatestJournal'
export default {
	components: {
		Hero,
		Projects,
		LatestJournal,
	},
	metaInfo: {
		title: 'home',
	},
	data() {
		return {}
	},
}
</script>

<style></style>
