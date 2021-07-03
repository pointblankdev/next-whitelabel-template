# Sections

Our UI "sections" go in here.

## What is a section?

A section is a arrangement of components that is specific to a NextJS page.

Sections generally take up the full width of a page.

Sections are abstractions around business logic.

Sections are _generally not_ used on more than one page.

This will allow us to keep the components highly modular-
while sections allow for a degree of customization that
doesn't have a clear or apparent refactor pattern.

_We're okay with sections getting messy so the components stay clean._

## Where are sections used?

To compose NextJS pages!

Here's an example:

```tsx
const Page = () => {
    <Layout>
        {/* 👇 These are all sections */}
        <Hero />
        <CallToAction />
        <OurServices>
            <ServiceA />
            <ServiceB />
            <ServiceC />
        </OurServices>
        <SubscribeToBlog />
    </Layout>;
};
```
