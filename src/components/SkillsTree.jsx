import tw, { styled } from "twin.macro"
import React from "react"
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/outline'

const skills = [
  {
    title: "What's the best thing about Switzerland?",
    description:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.",
  },
  // More questions...
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const SkillsTree = () => {
  return (
    <OuterWrapper>
      <InnerWrapper>
        <ContentWrapper>
          <Title>Frequently asked questions</Title>
          <Dl>
            {skills.map((skill) => (
              <Disclosure as={Div} key={skill.title}>
                {({ open }) => (
                  <>
                    <Dt>
                      <Disclosure.Button className={DisclosureButton}>
                        <Span1>{skill.description}</Span1>
                        <Span2>
                          <ChevronDownIcon
                            className={classNames(open ? '-rotate-180' : 'rotate-0', 'h-6 w-6 transform')}
                            aria-hidden="true"
                          />
                        </Span2>
                      </Disclosure.Button>
                    </Dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base text-gray-500">{skill.detail}</p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </Dl>
        </ContentWrapper>
      </InnerWrapper>
    </OuterWrapper>
  )
}

export default SkillsTree

const OuterWrapper = tw.div`
bg-almond
`
const InnerWrapper = tw.div`
max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8
`
const ContentWrapper = tw.div`
max-w-3xl mx-auto divide-y-2 divide-gray-200
`
const Title = tw.h2`
text-center text-3xl font-extrabold text-gray-900 sm:text-4xl
`
const Dl = tw.dl`
mt-6 space-y-6 divide-y divide-gray-200
`
const Dt = tw.dt`
text-lg
`
const Span1 = tw.span`
font-medium text-gray-900
`
const Span2 = tw.span`
ml-6 h-7 flex items-center
`
const Div = tw.div`
pt-6
`
const DisclosureButton = styled(Disclosure.Button)`
  ${tw`text-left w-full flex justify-between items-start text-gray-400`}
  `
const Dd = styled(Disclosure.Panel)`

`
