exports.createPages = async ({ actions, graphql, reporter }) => {
  const impressum = await graphql(`
    query {
      contentfulImpressum {
        url
        text {
          raw
        }
      }
    }
  `);

  if (impressum.error) {
    reporter.panic('failed to create impressum page', impressum.errors);
  }

  actions.createPage({
    path: impressum.data.contentfulImpressum.url,
    component: require.resolve('./src/templates/impressum.js'),
    context: {
      slug: impressum.data.contentfulImpressum.url,
      text: impressum.data.contentfulImpressum.text.raw,
    },
  });
};
